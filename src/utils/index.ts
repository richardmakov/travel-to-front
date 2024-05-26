import {z} from 'zod'

export const User = z.object({
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
    id:z.string(),
    title:z.string(),
    image:z.string(),
    priceUSD: z.string(),
    description: z.string(),
    visit: z.string(),
    priceEUR: z.string(),
    dir: z.string(),
    departureDate:  z.string(),
    returnDate:  z.string()
})
