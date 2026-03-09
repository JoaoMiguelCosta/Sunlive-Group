/**
 * @typedef {Object} BrandLink
 * @property {string} label
 * @property {string} href
 */

/**
 * @typedef {Object} BrandImage
 * @property {string} [src]
 * @property {string} alt
 * @property {string} [href]
 * @property {string} [loading]
 * @property {string} [decoding]
 */

/**
 * @typedef {Object} BrandContactItem
 * @property {string|null} label
 * @property {string|undefined} href
 * @property {string|undefined} [ariaLabel]
 */

/**
 * @typedef {Object} BrandContacts
 * @property {string} title
 * @property {BrandContactItem} email
 * @property {BrandContactItem} phone
 * @property {BrandContactItem[]} [extraPhones]
 */

/**
 * @typedef {Object} BrandLocation
 * @property {string} title
 * @property {string[]} addressLines
 * @property {string} mapHref
 */

/**
 * @typedef {Object} BrandSocialItem
 * @property {string} key
 * @property {string} label
 * @property {string} href
 * @property {Function} [Icon]
 */

/**
 * @typedef {Object} BrandHeader
 * @property {BrandLink} [backLink]
 * @property {BrandImage} [logo]
 * @property {Object} [lang]
 * @property {BrandSocialItem[]} [socials]
 * @property {{ label: string, href: string, ariaLabel?: string }} [cta]
 */

/**
 * @typedef {Object} BrandNavItemLink
 * @property {string} label
 * @property {string} href
 */

/**
 * @typedef {Object} BrandNavItem
 * @property {string} id
 * @property {string} label
 * @property {string} [to]
 * @property {BrandNavItemLink[]} [links]
 */

/**
 * @typedef {Object} BrandQuickLink
 * @property {string} key
 * @property {string} label
 * @property {string} href
 * @property {string} [variant]
 */

/**
 * @typedef {Object} BrandGatewayItem
 * @property {string} key
 * @property {string} label
 * @property {string} href
 * @property {string} [variant]
 */

/**
 * @typedef {Object} BrandCollaboratorItem
 * @property {string} key
 * @property {string} label
 * @property {string} href
 */

/**
 * @typedef {Object} BrandContactChannel
 * @property {string} key
 * @property {string} iconKey
 * @property {string|null} label
 * @property {string|undefined} href
 * @property {string|undefined} [ariaLabel]
 */

/**
 * @typedef {Object} BrandBook
 * @property {string} id
 * @property {string} label
 * @property {string} href
 * @property {string} type
 * @property {string} [filename]
 * @property {string} [ariaLabel]
 */

/**
 * @typedef {Object} FooterInfoHeaderBrand
 * @property {Function} [Icon]
 * @property {string} title
 * @property {string} [tagline]
 * @property {string} [about]
 * @property {string} [aboutIntro]
 * @property {BrandLink} [link]
 */

/**
 * @typedef {Object} FooterInfoHeader
 * @property {FooterInfoHeaderBrand} brand
 * @property {BrandLocation} location
 * @property {BrandContacts} contacts
 * @property {{ title: string, items: BrandSocialItem[] }} socials
 * @property {{ keepOriginalAboutFirstLine?: boolean }} [options]
 */

/**
 * @typedef {Object} FooterAcknowledgements
 * @property {{ src: string, alt: string, loading?: string, decoding?: string }} image
 * @property {{ href: string, target?: string, rel?: string, ariaLabel?: string }|undefined} [link]
 */

/**
 * @typedef {Object} FooterPoliciesBar
 * @property {Array<{ key: string, label: string, href: string }>} links
 * @property {{ holder?: string, year?: number }} copyright
 * @property {{ ariaLabel: string }} [icon]
 */

/**
 * @typedef {Object} BrandFooterSection
 * @property {string} id
 * @property {FooterInfoHeader} infoHeader
 * @property {Object} [linkDirectory]
 * @property {FooterAcknowledgements} [acknowledgements]
 * @property {FooterPoliciesBar} [policiesBar]
 */

/**
 * @typedef {Object} BrandPaths
 * @property {string} base
 * @property {Object.<string, string>} pages
 * @property {string} [logos]
 */

/**
 * @typedef {Object} BrandConfig
 * @property {string} key
 * @property {string} brandName
 * @property {Object} [lang]
 * @property {BrandPaths} paths
 * @property {BrandHeader} header
 * @property {{ primaryItems: BrandNavItem[] }} nav
 * @property {BrandQuickLink[]} [quickLinks]
 * @property {BrandGatewayItem[]} [gateway]
 * @property {BrandCollaboratorItem[]} [collaborators]
 * @property {BrandContactChannel[]} [contactChannels]
 * @property {Object.<string, any>} pages
 * @property {{ footer?: BrandFooterSection, [key: string]: any }} sections
 * @property {Object.<string, Function>} icons
 * @property {Object.<string, Function>} flags
 * @property {Object.<string, BrandBook>} books
 */

export {};
