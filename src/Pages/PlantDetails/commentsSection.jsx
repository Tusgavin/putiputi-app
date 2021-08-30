import React from 'react';
import {
   Layout,
   Text,
   List,
   ListItem,
   Icon,
   Input
 } from '@ui-kitten/components';

import styles from './styles';

const commentIcon = (props) => {
  return <Icon {...props} name='message-circle-outline' />
};

const fakeComments = new Array(10).fill(
  { comment: "Precisa de trocar a terra e colocar fertilizante", createdAt: "21/07/2021", icon: commentIcon }
);

const renderComments = ({ item, index }) => (
  <ListItem
     key={index}
     title={item.comment}
     description={item.createdAt}
     accessoryLeft={item.icon}
   />
);

const CommentsSection = () => {
  return (
    <Layout style={styles.plantDeatilsCommentsContainer}>
        <Layout style={styles.commentSectionTitleContainer}>
          <Text category="h6">Comentários</Text>
        </Layout>
        <List
        data={fakeComments}
        renderItem={renderComments}
        />
        <Input />
    </Layout>
  );
}

export default CommentsSection;