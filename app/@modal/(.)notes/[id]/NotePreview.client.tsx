'use client';

import Modal from '@/components/Modal/Modal';
import { Note } from '@/types/note';
import css from './NotePreview.module.css';
import { useRouter } from 'next/navigation';

type NotePreviewProps = {
  note: Note;
};

const NotePreviewClient = ({ note }: NotePreviewProps) => {
  const router = useRouter();
  const closeModal = () => router.back();

  const formattedDate = note.updatedAt
    ? `Updated at: ${note.updatedAt}`
    : `Created at: ${note.createdAt}`;
  return (
    <Modal onClose={closeModal}>
      <div className={css.container}>
        <div className={css.item}>
          <div className={css.header}>
            <h2>{note.title}</h2>
            <button className={css.backBtn} onClick={closeModal}>
              Back
            </button>
          </div>
          <p className={css.content}>{note.content}</p>
          <p className={css.tag}>{note.tag}</p>
          <p className={css.date}>{formattedDate}</p>
        </div>
      </div>
    </Modal>
  );
};

export default NotePreviewClient;
