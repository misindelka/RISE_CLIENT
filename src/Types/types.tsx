// Products

export interface IProductTypes {
    products: any
    map: any
    _id: number
    name: string
    slug: string
    desc: string
    category: string
    new: boolean
    amount: number
    quantity: number
    image: string
    more: string
    price: number
    totalPrice: number
}

export interface IBoxColumns {
    label: string
    fieldName: string
}

export interface ItableConfig {
    columns: {
        label: string
        fieldName: string
    }[]
}

export interface IConfigTypes {
    columns: {
        label: string
        fieldName: string
    }[]
}
export interface IUser {
    name: string
    surname: string
    street: string
    stNumber: string
    city: string
    zipCode: string
    email: string
    phoneNumber: string
}

export interface ISubmitedUser {
    email: string
    password: string
}

export interface IFaq {
    id: string
    question: string
    answer: string
}

export interface IFaqTitle {
    id: string
    title: string
}
export interface IHome {
    id: string
    title: string
    content: string
}

// Pages //

export interface IAboutProps {
    id: number
    name: string
    head: string
    image: string
    more: string
    about: string
}

export interface IContactProps {
    id: string
    country: string
    email: string
    phone: string
    streetName: string
    title: string
    city: string
}

// TYPES //
export type TSubmitUserData = (user: IUser) => void

export type TAddToBox = (p: IProductTypes) => void

export type TSubmitUser = (user: ISubmitedUser) => void
