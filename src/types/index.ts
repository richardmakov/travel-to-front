import {z} from 'zod'
import { Label, User, Offert, Userlogin } from '../utils'

export type UserType = z.infer<typeof User>
export type UserLoginType = z.infer<typeof Userlogin>
export type LabelType = z.infer<typeof Label>
export type OffertType = z.infer<typeof Offert>