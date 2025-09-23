
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/explorer.scss"

// @ts-ignore
import script from "./scripts/explorer.inline"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { FileTrieNode } from "../util/fileTrie"
import OverflowListFactory from "./OverflowList"
import { concatenateResources } from "../util/resources"

type OrderEntries = "sort" | "filter" | "map"

export interface Options {
  title?: string
  folderDefaultState: "collapsed" | "open"
  folderClickBehavior: "collapse" | "link"
  useSavedState: boolean
  sortFn: (a: FileTrieNode, b: FileTrieNode) => number
  filterFn: (node: FileTrieNode) => boolean
  mapFn: (node: FileTrieNode) => void
  order: OrderEntries[]
}

const defaultOptions: Options = {
  folderDefaultState: "collapsed",
  folderClickBehavior: "link",
  useSavedState: true,
  mapFn: (node) => {
    return node
  },
  sortFn: (a, b) => {
    // Sort order: folders first, then files. Sort folders and files alphabetically
    if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
      return a.displayName.localeCompare(b.displayName, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }
    if (!a.isFolder && b.isFolder) {
      return 1
    } else {
      return -1
    }
  },
  filterFn: (node) => node.slugSegment !== "tags",
  order: ["filter", "map", "sort"],
}

export type FolderState = {
  path: string
  collapsed: boolean
}

export default ((userOpts?: Partial<Options>) => {
  const opts: Options = { ...defaultOptions, ...userOpts }
  const { OverflowList, overflowListAfterDOMLoaded } = OverflowListFactory()

  const Explorer: QuartzComponent = ({ cfg, displayClass }: QuartzComponentProps) => {
    return (
      <div
        class={classNames(displayClass, "explorer")}
        data-behavior={opts.folderClickBehavior}
        data-collapsed={opts.folderDefaultState}
        data-savestate={opts.useSavedState}
        data-data-fns={JSON.stringify({
          order: opts.order,
          sortFn: opts.sortFn.toString(),
          filterFn: opts.filterFn.toString(),
          mapFn: opts.mapFn.toString(),
        })}
      >
        <button
          type="button"
          class="explorer-toggle mobile-explorer hide-until-loaded"
          data-mobile={true}
          aria-controls="explorer-content"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>

        <button
          type="button"
          class="title-button explorer-toggle desktop-explorer"
          data-mobile={false}
          aria-expanded={true}
        >
          <h2>{opts.title ?? i18n(cfg.locale).components.explorer.title}</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="5 8 14 8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            class="fold"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>

        <div class="explorer-content" aria-expanded={false}>
          <OverflowList class="explorer-ul" />
        </div>

        <template id="template-file">
          <li>
            <a href="#"></a>
          </li>
        </template>

        <template id="template-folder">
          <li>
            <div class="folder-container">
              <div>
                <button class="folder-button">
                  <span class="folder-title"></span>
                </button>
              </div>
            </div>
            <div class="folder-outer">
              <ul class="content"></ul>
            </div>
          </li>
        </template>
      </div>
    )
  }

  Explorer.css = style

  Explorer.afterDOMLoaded = concatenateResources(
    script,
    overflowListAfterDOMLoaded,
    `
    /* ===== Explorer Modules Guard (ALL modules) ===== */
    (function () {
      const PERIOD_DAYS = 14;

      // 🔐 Сіль для генерації паролів (поміняєш — усі паролі одразу стануть іншими)
      const SALT = "AMZ-Quartz-Guard-2025-01";

      // ⏱️ Період (кожні 14 днів паролі й доступи оновлюються)
      const nowMs = () => Date.now();
      const periodIndex = () => Math.floor(nowMs() / (PERIOD_DAYS * 86400e3));
      const periodEndISO = () => new Date((periodIndex() + 1) * PERIOD_DAYS * 86400e3).toISOString();

      // 🧮 Детермінована генерація 8-символьного пароля з base62
      const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      function gen8(seed) {
        // простий подвійний FNV1a-в-духу мікс (детерміновано, швидко, без crypto API)
        let h1 = 0x811c9dc5, h2 = 0x811c9dc5;
        for (let i = 0; i < seed.length; i++) {
          const c = seed.charCodeAt(i);
          h1 ^= c; h1 = Math.imul(h1, 0x01000193) >>> 0;
          h2 ^= (c + (i<<1)); h2 = Math.imul(h2, 0x01000193) >>> 0;
        }
        const out = [];
        let a = h1 ^ (h2 << 1);
        let b = h2 ^ (h1 << 1);
        for (let i = 0; i < 8; i++) {
          a = (Math.imul(a ^ (a >>> 13), 0x85ebca6b) + i) >>> 0;
          b = (Math.imul(b ^ (b >>> 16), 0xc2b2ae35) + (i<<2)) >>> 0;
          const v = (a ^ (b >>> 1)) >>> 0;
          out.push(CHARS[v % 62]);
        }
        return out.join("");
      }

      // 📌 Пароль для модуля / глобальний
      function passwordForModule(folderName) {
        const seed = SALT + "::MODULE::" + folderName + "::p" + periodIndex();
        return gen8(seed);
      }
      function globalPassword() {
        const seed = SALT + "::GLOBAL::p" + periodIndex();
        return gen8(seed);
      }

      // 🗂️ що є модулем
      const isModuleFolder = (name) => {
        if (!name) return false;
        const t = name.trim();
        return /^\\s*\\d+(?:\\.\\d+)?\\s*(модуль|module)/i.test(t) || /^(модуль|module)\\s*\\d+(?:\\.\\d+)?/i.test(t);
      };

      // 🎟️ ключ доступу в localStorage (прив’язаний до періоду)
      const accessKey = (folderName) => 'moduleAccess::' + folderName + '::p' + periodIndex();
      const hasAccess = (folderName) => {
        try {
          const raw = localStorage.getItem(accessKey(folderName));
          if (!raw) return false;
          const data = JSON.parse(raw);
          const granted = !!data.granted;
          const expiresAt = data.expiresAt ? new Date(data.expiresAt).getTime() : 0;
          if (!granted) return false;
          if (expiresAt && expiresAt < nowMs()) return false;
          return true;
        } catch { return false; }
      };
      const grantAccess = (folderName) => {
        localStorage.setItem(
          accessKey(folderName),
          JSON.stringify({ granted: true, expiresAt: periodEndISO() })
        );
      };

      // === Утиліти модалок ===
      const mkOverlay = (blur) => {
        var ov = document.createElement("div");
        Object.assign(ov.style, {
          position: "fixed", inset: "0",
          background: "rgba(0,0,0,.45)", zIndex: 9998,
          backdropFilter: blur ? "blur(8px)" : "",
          WebkitBackdropFilter: blur ? "blur(8px)" : ""
        });
        return ov;
      };
      const mkBox = () => {
        var bx = document.createElement("div");
        Object.assign(bx.style, {
          position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          background: "#2b2b33", color: "#fff",
          padding: "20px", borderRadius: "14px",
          boxShadow: "0 12px 36px rgba(0,0,0,.35)",
          width: "min(560px, 92vw)", zIndex: 9999, fontFamily: "inherit"
        });
        return bx;
      };

      // === Модалка пароля для конкретного модуля ===
      const showPasswordModal = (folderName) => new Promise((resolve) => {
        var overlay = mkOverlay(true);
        var box = mkBox();

        var inputStyle =
          "width:100%;box-sizing:border-box;padding:12px 14px;border:1px solid #444;" +
          "border-radius:10px;background:#1f1f1f;color:#fff;outline:none";

        var primaryBtn = "flex:1;padding:12px 14px;border:0;border-radius:10px;cursor:pointer;background:#5b5bd6;color:#fff";
        var secondaryBtn = "flex:1;padding:12px 14px;border:0;border-radius:10px;cursor:pointer;background:#444;color:#eee";

        box.innerHTML =
          '<h3 style="margin:0 0 12px 0;color:#fff;">Введіть пароль для: <b>' + folderName + '</b></h3>' +
          '<input id="module-pass" type="password" placeholder="Пароль (8 символів)" style="' + inputStyle + '">' +
          '<div id="module-err" style="color:#ff6b6b;margin:8px 0 0 0;display:none">Невірний пароль</div>' +
          '<div style="display:flex;gap:10px;margin-top:14px">' +
            '<button id="module-ok" style="' + primaryBtn + '">Увійти</button>' +
            '<button id="module-cancel" style="' + secondaryBtn + '">Скасувати</button>' +
          '</div>' +
          '<div style="margin-top:10px;opacity:.9;font-size:.9em">Доступ збережеться до кінця поточного ' + PERIOD_DAYS + '-денного періоду.</div>';

        var cleanup = function() { document.body.style.overflow = ""; overlay.remove(); box.remove(); };

        document.body.append(overlay, box);
        document.body.style.overflow = "hidden";

        var input = box.querySelector("#module-pass");
        var err = box.querySelector("#module-err");
        var okBtn = box.querySelector("#module-ok");
        var cancelBtn = box.querySelector("#module-cancel");

        var submit = function() {
          var pass = (input && input.value ? input.value : "").trim();
          if (pass === passwordForModule(folderName) || pass === globalPassword()) { cleanup(); resolve(true); }
          else { if (err) err.style.display = "block"; }
        };

        okBtn && okBtn.addEventListener("click", submit);
        input && input.addEventListener("keydown", function (e) { if (e && e.key === "Enter") submit(); });
        cancelBtn && cancelBtn.addEventListener("click", function () { cleanup(); resolve(false); });
        overlay.addEventListener("click", function () { cleanup(); resolve(false); });

        input && input.focus();
      });

      // === Модалка довідки: актуальні паролі (Ctrl+Alt+P) ===
      const showPasswordsHelp = () => {
        var titles = Array.prototype.slice.call(document.querySelectorAll(".folder-title"))
          .map(function (el) { return el && el.textContent ? el.textContent.trim() : ""; })
          .filter(function (t) { return t && isModuleFolder(t); });

        var uniq = Array.from(new Set(titles)).sort(function(a,b){ return a.localeCompare(b, 'uk', {numeric:true, sensitivity:'base'}); });

        var overlay = mkOverlay(true);
        var box = mkBox();

        var rows = uniq.map(function (name) {
          var pw = passwordForModule(name);
          return '<tr><td style="padding:6px 10px;border-bottom:1px solid #3a3a44; color:#fff; white-space:nowrap;">' + name + '</td>' +
                 '<td style="padding:6px 10px;border-bottom:1px solid #3a3a44; color:#fff;font-family:ui-monospace, SFMono-Regular, Menlo, monospace;">' + pw + '</td></tr>';
        }).join("");

        if (!rows) {
          rows = '<tr><td colspan="2" style="padding:10px;opacity:.8">Модулі не знайдені на цій сторінці.</td></tr>';
        }

        // Глобальний пароль і кінець періоду
        var gpw = globalPassword();
        var gpwUntil = periodEndISO();

        box.innerHTML =
          '<h3 style="margin:0 0 12px 0;">Актуальні паролі (цього ' + PERIOD_DAYS + '-денного періоду)</h3>' +
          '<div style="max-height:min(60vh,480px);overflow:auto;border:1px solid #3a3a44;border-radius:10px">' +
            '<table style="width:100%;border-collapse:collapse;font-size:14px">' +
              '<thead><tr>' +
                '<th style="text-align:left;padding:8px 10px;border-bottom:1px solid #3a3a44; color:#fff; opacity:.8">Модуль</th>' +
                '<th style="text-align:left;padding:8px 10px;border-bottom:1px solid #3a3a44; color:#fff; opacity:.8">Пароль</th>' +
              '</tr></thead>' +
              '<tbody>' + rows + '</tbody>' +
            '</table>' +
          '</div>' +

          // Блок глобального пароля унизу
          '<div style="margin-top:12px;padding:10px 12px;border:1px dashed #54545f;border-radius:10px;background:#23232b;">' +
            '<div style="font-weight:600;margin-bottom:6px;">Глобальний пароль (діє до ' + gpwUntil.replace("T"," ").replace("Z"," UTC") + '):</div>' +
            '<div style="display:flex;gap:8px;align-items:center;">' +
              '<div id="gpw-val" style="flex:1;padding:8px 10px;border:1px solid #3a3a44;border-radius:8px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;">' + gpw + '</div>' +
              '<button id="gp-copy" style="padding:10px 12px;border:0;border-radius:8px;cursor:pointer;background:#5b5bd6;color:#fff">Скопіювати</button>' +
            '</div>' +
          '</div>' +

          '<div style="display:flex;gap:10px;margin-top:14px">' +
            '<button id="pw-close" style="flex:1;padding:12px 14px;border:0;border-radius:10px;cursor:pointer;background:#5b5bd6;color:#fff">Закрити</button>' +
          '</div>';

        var cleanup = function() { document.body.style.overflow = ""; overlay.remove(); box.remove(); };

        document.body.append(overlay, box);
        document.body.style.overflow = "hidden";

        // копіювання глобального пароля
        box.querySelector("#gp-copy")?.addEventListener("click", function () {
          try {
            navigator.clipboard.writeText(gpw);
            // короткий візуальний фідбек
            var b = box.querySelector("#gp-copy");
            var orig = b.textContent;
            b.textContent = "Скопійовано";
            setTimeout(function () { if (b) b.textContent = orig; }, 1200);
          } catch(_) {}
        });

        box.querySelector("#pw-close")?.addEventListener("click", cleanup);
        overlay.addEventListener("click", cleanup);
      };

      // === Хоткей Ctrl+Alt+P — показати актуальні паролі
      document.addEventListener("keydown", function (e) {
        try {
          if (e && e.ctrlKey && e.altKey && (e.key === "p" || e.key === "P")) {
            e.preventDefault();
            showPasswordsHelp();
          }
        } catch(_) {}
      });

      // === Перехоплення кліків у фазі capture НА КОНТЕЙНЕРІ .explorer ===
      document.querySelector(".explorer")?.addEventListener("click", async function (ev) {
        var el = ev.target;
        if (!(el instanceof Element)) return;

        var li = el.closest("li");
        if (!li) return;

        var titleEl = li.querySelector(".folder-title");
        var folderName = titleEl && titleEl.textContent ? titleEl.textContent.trim() : "";
        if (!folderName) return;

        if (!isModuleFolder(folderName)) return;
        if (hasAccess(folderName)) return;

        ev.preventDefault();
        ev.stopPropagation();

        var ok = await showPasswordModal(folderName);
        if (ok) {
          grantAccess(folderName);
          requestAnimationFrame(function () {
            titleEl && titleEl.dispatchEvent(new MouseEvent("click", { bubbles: true }));
          });
        }
      }, true);

      // === Guard для прямих лінків у середину модуля (blur + редірект на домашню) ===
      (function () {
        try {
          var computeHomePath = function () {
            var parts = (location.pathname || "/").split("/").filter(Boolean);
            if (parts.length === 0 || /^\\d+/.test(parts[0]) || /^модуль|module/i.test(decodeURIComponent(parts[0]).replace(/-/g," "))) return "/";
            return "/" + parts[0] + "/";
          };
          var HOME = computeHomePath();

          var path = decodeURIComponent(location.pathname || "");
          var first = path.replace(/^\\/+/, "").split("/")[0] || "";
          if (!first) return;

          var normalized = decodeURIComponent(first).replace(/-/g, " ").trim();

          if (!isModuleFolder(normalized)) return;
          if (hasAccess(normalized)) return;

          var cover = mkOverlay(true);
          Object.assign(cover.style, { background: "rgba(0,0,0,.6)" });
          document.body.append(cover);
          document.body.style.overflow = "hidden";

          showPasswordModal(normalized).then(function (ok) {
            if (ok) {
              try { cover.remove(); } catch(e){}
              document.body.style.overflow = "";
            } else {
              try { location.href = HOME; } catch(e){}
            }
          });
        } catch(e){}
      })();

    })();
    `
  )

  return Explorer
}) satisfies QuartzComponentConstructor
