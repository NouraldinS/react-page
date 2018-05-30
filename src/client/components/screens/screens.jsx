import React from 'react';
import { Upload, Icon, Modal } from 'antd';

import './screens.css';

class Screens extends React.Component {
  constructor() {
    super();
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: [],
    };

    this.handleCancel = () => this.setState({ previewVisible: false });

    this.handlePreview = (file) => {
      this.setState({
        previewImage: file.url || file.thumbUrl,
        previewVisible: true,
      });
    };

    this.handleChange = ({ fileList }) => this.setState({ fileList });
  }

  render() {
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix">
        <Upload
          action=""
          listType="picture-card"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default Screens;
