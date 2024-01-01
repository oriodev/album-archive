import AlbumDisplay from '@/components/AlbumDisplay';
import NewAlbumForm from '@/components/NewAlbumForm';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Link href="/add-album">add album</Link>
      <AlbumDisplay />
    </div>
  );
}
