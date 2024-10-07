'use client';

import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from '@/components/ui/pagination';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import UserDetailModal from '../user-detail/user-detail-modal';
import DeleteUserDialog from '../user-delete/delete-user-dialog';

interface User {
  id: string;
  email: string;
  username: string;
  role: string;
  createdAt: string;
}

interface UsersTableProps {
  users: User[];
  isLoading: boolean;
  totalPages: number;
  currentPage: number;
  // eslint-disable-next-line no-unused-vars
  onPageChange: (page: number) => void;
  onUserDeleted: () => void;
}

const UsersTable = ({
  users,
  isLoading,
  totalPages,
  currentPage,
  onPageChange,
  onUserDeleted,
}: UsersTableProps) => {
  return (
    <Card>
      <CardHeader className='px-7'>
        <CardTitle>Users</CardTitle>
      </CardHeader>
      <CardContent>
        <Table className='overflow-hidden'>
          <TableHeader>
            <TableRow>
              <TableHead className='hidden md:table-cell'>ID</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className='hidden sm:table-cell'>Username</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className='hidden md:table-cell'>Date</TableHead>
              <TableHead className='hidden md:table-cell'>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading &&
              Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={index} className='animate-pulse'>
                  <TableCell width={'40%'}>
                    <div className='p-5 bg-gray-400/30 rounded-xl'></div>
                  </TableCell>
                  <TableCell>
                    <div className='p-5 bg-gray-400/30 rounded-xl'></div>
                  </TableCell>
                  <TableCell>
                    <div className='p-5 bg-gray-400/30 rounded-xl'></div>
                  </TableCell>
                  <TableCell>
                    <div className='p-5 bg-gray-400/30 rounded-xl'></div>
                  </TableCell>
                  <TableCell>
                    <div className='p-5 bg-gray-400/30 rounded-xl'></div>
                  </TableCell>
                  <TableCell>
                    <div className='p-5 bg-gray-400/30 rounded-xl'></div>
                  </TableCell>
                </TableRow>
              ))}
            {!isLoading &&
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className='hidden md:inline'>
                    <div className='text-sm text-muted-foreground'>
                      {user.id}
                    </div>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell className='hidden sm:table-cell'>
                    {user.username}
                  </TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell className='hidden md:table-cell'>
                    {user.createdAt}
                  </TableCell>
                  <TableCell className='hidden md:table-cell'>
                    <div className='flex space-x-2'>
                      <UserDetailModal user={user} />
                      <DeleteUserDialog
                        userId={user.id}
                        onDeleteSuccess={onUserDeleted}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <Pagination>
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <Button onClick={() => onPageChange(currentPage - 1)}>
                  <ChevronLeft />
                </Button>
              </PaginationItem>
            )}
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <Button onClick={() => onPageChange(index + 1)}>
                  {index + 1}
                </Button>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            {totalPages !== currentPage && (
              <PaginationItem>
                <Button onClick={() => onPageChange(currentPage + 1)}>
                  <ChevronRight />
                </Button>
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </CardContent>
    </Card>
  );
};

export default UsersTable;
