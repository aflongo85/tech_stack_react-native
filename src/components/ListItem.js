import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { 
    Text, 
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation
} from 'react-native';
import * as actions from '../actions'; 


class ListItem extends Component {

    componentWillUpdate() {
        LayoutAnimation.spring()
    }
    
    renderDescription() {
        const { library, isSelected } = this.props;
        if (isSelected) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>{library.description}</Text>
                </CardSection>
               
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { title, id } = this.props.library;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
            
        );
    }  
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

const mapStateToProps = (state, ownProps) => {
    
    const selected = (ownProps.library.id === state.selectedLibraryId);
    return { isSelected: selected };
}; 

export default connect(mapStateToProps, actions)(ListItem);