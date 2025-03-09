import arrowDown from './assets/arrowDown.svg'
import burger from './assets/burger.svg'
import cart from './assets/cart.svg'
import check from './assets/check.svg'
import close from './assets/close.svg'
import discord from './assets/discord.svg'
import geo from './assets/geo.svg'
import instagram from './assets/instagram.svg'
import mail from './assets/mail.svg'
import phone from './assets/phone.svg'
import profile from './assets/profile.svg'
import twitter from './assets/twitter.svg'

const ICONS = {
    arrowDown,
    profile,
    cart,
    phone,
    mail,
    geo,
    twitter,
    instagram,
    discord,
    check,
    burger,
    close
}

export type IconType = keyof typeof ICONS
export default ICONS
