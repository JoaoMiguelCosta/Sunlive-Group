/**
 * @typedef {import("./nav.js").NavItem} NavItem
 * @typedef {import("./nav.js").NavLink} NavLink
 * @typedef {import("./nav.js").SocialLink} SocialLink
 * @typedef {import("./page.js").PageConfig} PageConfig
 * @typedef {import("./footer.js").FooterConfig} FooterConfig
 */

/**
 * @typedef {Object} LangConfig
 * @property {string} current
 * @property {{ label: string, name: string, code: string, dir?: "rtl" }[]} options
 */

/**
 * @typedef {Object} BrandPaths
 * @property {string} base
 * @property {Record<string, string>} pages
 */

/**
 * @typedef {Object} BrandHeader
 * @property {{ href: string, label: string }} backLink
 * @property {{ src: string, alt: string, href: string }=} logo
 * @property {LangConfig} lang
 * @property {SocialLink[]} socials
 */

/**
 * @typedef {Object} BrandNav
 * @property {NavLink[]=} quickLinks
 * @property {NavItem[]=} primaryItems
 */

/**
 * @typedef {Object} BrandConfig
 * @property {string} key
 * @property {string} brandName
 * @property {LangConfig} lang
 * @property {BrandPaths} paths
 * @property {BrandHeader} header
 * @property {BrandNav} nav
 * @property {Record<string, PageConfig>} pages
 * @property {{ footer: FooterConfig }} sections
 */

export {};
