import { faker } from '@faker-js/faker'
import { AccountModel } from '../models/accountModel'
import { AuthenticationParams } from '../useCases/authentication'

export const mockAuthentication = (): AuthenticationParams => ({
  email: faker.internet.email(),
  password: faker.internet.password()
})

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.datatype.uuid()
})
