import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as bannerActions from '../../store/actions/bannerActions'
import './Banner.scss'

interface Props {
  name: string,
  actions: string[],
  description: string[]
}

class Banner extends React.Component<Props> {
  public state: any = {
    test: 'his'
  }

  get currentVal (): string {
    return 'hi'
  }

  public componentDidMount (): void {
    const { actions } = this.props
    ;(actions as any).loadBannerDescription()
  }

  public render (): any {
    return (
      <div>
        Banner
      </div>
    )
  }
}

function mapStateToProps(state: any): any {
  return {
    description: state.banner
  }
}

function mapDispatchToProps(dispatch: any): any {
  return {
    actions: {
      loadBannerDescription: bindActionCreators(bannerActions.loadBannerDescription, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Banner)
