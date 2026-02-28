/**
 * @typedef {import("./nav.js").NavLink} NavLink
 * @typedef {import("./nav.js").SocialLink} SocialLink
 */

/**
 * @typedef {Object} FooterInfoHeader
 * @property {{ iconKey?: string, title: string, tagline?: string, about?: string, aboutIntro?: string, link?: {label: string, href: string} }} brand
 * @property {{ keepOriginalAboutFirstLine?: boolean }=} options
 * @property {{ title?: string, addressLines?: string[], mapHref?: string }=} location
 * @property {{ title?: string, email?: {href?: string, label?: string}, phone?: {href?: string, label?: string}, phones?: {href?: string, label?: string}[] }=} contacts
 * @property {{ title?: string, items?: SocialLink[] }=} socials
 */

/**
 * @typedef {Object} FooterAcknowledgements
 * @property {{ src: string, alt: string, loading?: "lazy"|"eager", decoding?: "async"|"sync"|"auto" }} image
 * @property {{ href: string, target?: "_blank"|"_self", rel?: string, ariaLabel?: string }=} link
 */

/**
 * @typedef {Object} FooterPoliciesBar
 * @property {NavLink[]} links
 * @property {{ holder: string, year?: number }} copyright
 * @property {{ ariaLabel: string }=} icon
 */

/**
 * @typedef {Object} FooterLinkDirectory
 * @property {Object=} meta
 * @property {any=} left
 * @property {any=} right
 * @property {any=} partners
 */

/**
 * @typedef {Object} FooterConfig
 * @property {string=} id
 * @property {FooterInfoHeader} infoHeader
 * @property {FooterLinkDirectory=} linkDirectory
 * @property {FooterAcknowledgements=} acknowledgements
 * @property {FooterPoliciesBar} policiesBar
 */

export {};
