import React, { Component } from 'react';
import { Modal } from '../../components/UI/Modal/Modal';
import { Aux } from '../Auxiliary/Auxiliary';

const WithErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };
    componentDidUpdate() {
      axios.interseptors.request.use((req) => {
        this.setState({ error: null });
      });
      axios.interseptors.response.use(null, (error) => {
        this.setState({ error: error });
      });
    }
    render() {
      return (
        <Aux>
          <Modal show>It seems something is going wrong...</Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export { WithErrorHandler };
