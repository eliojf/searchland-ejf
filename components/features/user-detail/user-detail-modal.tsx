'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface UserDetailModalProps {
  user: {
    id: string;
    email: string;
    username: string;
    role: string;
    createdAt: string;
  };
}

export default function UserDetailModal({ user }: UserDetailModalProps) {
  const [isModalOpen, setModalOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setModalOpen(true)}>View</Button>

      <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>User Details</DialogTitle>
            <DialogDescription>
              Details for user <strong>{user.username}</strong>
            </DialogDescription>
          </DialogHeader>

          <div className='space-y-4'>
            <div>
              <strong>ID:</strong> {user.id}
            </div>
            <div>
              <strong>Email:</strong> {user.email}
            </div>
            <div>
              <strong>Username:</strong> {user.username}
            </div>
            <div>
              <strong>Role:</strong> {user.role}
            </div>
            <div>
              <strong>Created At:</strong>{' '}
              {new Date(user.createdAt).toLocaleDateString()}
            </div>
          </div>

          <Button onClick={() => setModalOpen(false)} className='mt-4'>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
