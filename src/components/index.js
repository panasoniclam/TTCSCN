import React from 'react'
import { connect } from 'react-redux'
class Index extends React.Component {
    handle () {
        this.props.createuser();
        
    }
    render() {
        return (
            <div>
                <div>{this.props.lamnn}</div>
                
            </div>

        )
    }
}
const mapStateToProps = state => ({
    lamnn: state.lamnn
})
const mapDispatchToProps = (dispatch, props) => ({
     createuser:()=> dispatch()
})
export default  connect(mapStateToProps,mapDispatchToProps)(Index)