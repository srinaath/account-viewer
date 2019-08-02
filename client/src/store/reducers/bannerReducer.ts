import initialState from '../initialState'

export default function bannerReducer (state: any = initialState.bannerDescription, action: any): any {
  switch (action.type) {
    case 'loadBannerDescription':
      const updated: string[] = [...state]
      for (let i: number = 0; i < 3; i++) {
        updated.push(`New${Math.random() * 22}`)
      }
      return [...state, ...updated]
    default:
      return state
  }
}
