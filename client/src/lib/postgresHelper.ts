import { Client, ClientConfig } from 'pg'

export default (): any => {
  let client: Client
  async function main (): Promise<void> {
    const cf: ClientConfig = {
      user: process.env.PG_USER,
      host: process.env.PG_HOST,
      database: process.env.PG_DB,
      password: process.env.PG_PASS,
      port: Number(process.env.PORT)
    }
    client = new Client(cf)
    await client.connect()
  }

  function getAccountsData (): any {
    client.query('SELECT Name from Account', (err: any, res: any) => {
      debugger
      if (res) {
        return res
      }
      return err
    })
  }

  main()
  return {
    getAccountsData
  }
}
