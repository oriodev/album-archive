import React from 'react';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { PlusCircledIcon } from '@radix-ui/react-icons';
import { Input } from './ui/input';
import { Slider } from './ui/slider';
import { Label } from './ui/label';

const NewAlbumForm = () => {
  return (
    <div className="mx-auto mt-5">
      <Popover>
        <PopoverTrigger>
          <div>
            <PlusCircledIcon className="size-5 hover:text-muted-foreground" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="flex flex-col gap-y-3">
          <Label htmlFor="name">Album Name</Label>
          <Input id="name" type="text" placeholder="Bloom" />

          <Label htmlFor="artist">Album Artist</Label>
          <Input id="artist" type="text" placeholder="Troye Sivan" />

          <Label htmlFor="cover">Album Cover</Label>
          <Input id="cover" type="text" placeholder="url" />

          <Label htmlFor="rating">Album Rating</Label>
          <Slider id="rating" defaultValue={[1]} min={1} max={5} step={1} />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default NewAlbumForm;
