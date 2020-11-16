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
        return req;
      });
      axios.interseptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export { WithErrorHandler };
