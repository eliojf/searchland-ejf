'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { trpc } from '@/server/client';
import { Delete } from 'lucide-react';

interface DeleteUserDialogProps {
  userId: string;
  onDeleteSuccess: () => void;
}

export default function DeleteUserDialog({
  userId,
  onDeleteSuccess,
}: DeleteUserDialogProps) {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const deleteUser = trpc.users.delete.useMutation();

  const handleDelete = () => {
    deleteUser.mutate(
      { id: userId },
      {
        onSuccess: () => {
          onDeleteSuccess();
          setDialogOpen(false);
        },
      }
    );
  };

  return (
    <div>
      <AlertDialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogTrigger asChild>
          <Button variant='destructive'>
            <Delete className='mr-2 h-4 w-4' /> Delete
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              user.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel asChild>
              <Button variant='outline' onClick={() => setDialogOpen(false)}>
                Cancel
              </Button>
            </AlertDialogCancel>
            <AlertDialogAction asChild>
              <Button variant='destructive' onClick={handleDelete}>
                Delete
              </Button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
