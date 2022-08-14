import { HttpPostClient } from '~/data/protocols/http/httpPostClient'
import { HttpStatusCode } from '~/data/protocols/http/httpResponse'
import { InvalidCredentialsError } from '~/domain/erors/invalidCredentialsError'
import { UnexpectedError } from '~/domain/erors/unexpectedError'
import { AuthenticationParams } from '~/domain/useCases/authentication'

export class RemoteAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient
  ) {}

  async auth(params: AuthenticationParams): Promise<void> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()
      case HttpStatusCode.ok:
        break
      default:
        throw new UnexpectedError()
    }
  }
}
