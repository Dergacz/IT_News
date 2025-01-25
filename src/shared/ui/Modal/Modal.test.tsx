import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

describe('Modal', () => {
  test('renders modal when isOpen is true', () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <h2>Modal Title</h2>
        <p>This is a modal content!</p>
      </Modal>
    );
    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByText('Modal Title')).toBeInTheDocument();
    expect(screen.getByText('This is a modal content!')).toBeInTheDocument();
  });

  test('does not render modal when isOpen is false', () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <h2>Modal Title</h2>
        <p>This is a modal content!</p>
      </Modal>
    );
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument();
  });

  test('calls onClose when overlay is clicked', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <h2>Modal Title</h2>
        <p>This is a modal content!</p>
      </Modal>
    );

    fireEvent.click(screen.getByTestId('modal-overlay')); // Using the overlay selector
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('calls onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <h2>Modal Title</h2>
        <p>This is a modal content!</p>
      </Modal>
    );

    fireEvent.click(screen.getByTestId('close-button')); // Using a new data-testid for the close button
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
