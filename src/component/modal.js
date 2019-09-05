//import libraries
import React, { Component } from 'react';
import { Dimensions, Modal, Share } from 'react-native';
import {Container, Header, Content, Body, Left, Right, Title, Button} from 'native-base';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome';


// create a component
class ModalComponent extends Component {

    constructor(props) {
        super(props);
    }

    handleClose = () => {
        return this.props.onClose();
    }

    handleShare = () => {
        const {url, title} = this.props.articleData;
        message = `${title}\n\nRead More @${url}\n\nShared via RN News App`;
        return Share.share(
            {title, message, url: message},
            {dialogTitle:`Share ${title}`}
        );
    }

    render() {
        const { showModal, articleData } = this.props;
        const { url } = articleData;
        if( url != undefined ) {
        return (
            <Modal
                animationType="slide"
                transparent
                visible={showModal}
                onRequestClose={this.handleClose}
            >
                <Container style={{margin:15, marginBottom:0, backgroundColor:'#fff'}}>
                    <Header style={{backgroundColor:'#009387'}}>
                        <Left>
                            <Button onPress={this.handleClose} transparent>
                           <Icon name="window-close" size={30} color="white" />
                            </Button>
                        </Left>
                        <Body>
                            <Title children={articleData.title} style={{color: 'white'}}/>
                        </Body>
                        <Right>
                            <Button onPress={this.handleShare} transparent>
                            <Icon name="share-alt" size={30} color="white" />
                            </Button>
                        </Right>
                    </Header>
                    <Content contentContainerStyle={{height: "100%"}}>
                    <WebView onError={this._handleClose} startInLoadingState scalesPageToFit source={{uri:url}}/>
                    </Content>
                </Container>
            </Modal>
        );
        } else {
            return null;
        }
    }
}

//make this component available to the app
export default ModalComponent;
