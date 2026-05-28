import * as React from 'react';

import s from './CreatePostButton.module.scss';
import { useNavigate } from 'react-router';
import { Plus } from 'lucide-react';

const CreatePostButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      className={s.fab}
      onClick={() => navigate('/create')}
      aria-label="Create post"
    >
      <Plus size={60} color="#6B7A6F" />
    </button>
  );
};

export default CreatePostButton;
