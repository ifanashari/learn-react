import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class NewsList extends Component {
    render() {
        // const hostName = window.location.hostname
        return (
            <div>
                <ul>
                    {
                        this.props.news.newsList.map((data, index) => {
                            return(
                                <li key={index}>
                                    <Link to={`${this.props.match.url}/news/${data.id}`}>
                                        {data.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        news: state.newsList
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        tripNewDispatch: () => {
            dispatch({
                type: "ALPHA",
                payload: "BRAVO"
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)