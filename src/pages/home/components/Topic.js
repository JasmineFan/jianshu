import React, { Component } from "react";
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'

class Topic extends Component {
 
    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img className="topicimg" src={item.get('imgUrl')} />
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                }

            </TopicWrapper>
        )
    }
}
const mapStatetoprops = (state) => ({
	list: state.get('home').get('topicList')
});


export default connect( mapStatetoprops, null )(Topic);