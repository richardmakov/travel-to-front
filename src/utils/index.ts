import {z} from 'zod'

export const User = z.object({
    id:z?.number(),
    token: z?.string(),
    firstname: z.string(),
    lastname: z.string(),
    email: z.string(),
    phone: z.string(),
    idCard: z.string(),
    passport: z.string(),
    country: z.string(),
    date: z.string(),
    password: z.string()
})

export const UserRegister = z.object({
    firstname: z.string(),
    lastname: z.string(),
    email: z.string(),
    phone: z.string(),
    idCard: z.string(),
    passport: z.string(),
    country: z.string(),
    date: z.string(),
    password: z.string()
})

export const Userlogin = z.object({
    email: z.string(),
    password: z.string()
})


export const Label = z.object({
    id: z.number(),
    label: z.string()
})

export const Offert = z.object({
    id:z.number(),
    destination:z.string(),
    image:z.string(),
    price_usd: z.string(),
    description: z.string(),
    visit: z.string(),
    price_eur: z.string(),
    images_route: z.string(),
    departure_date:  z.string(),
    return_date:  z.string()
})
