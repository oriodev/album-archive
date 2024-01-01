import React from 'react';

import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

const page = () => {
  return (
    <form className="w-1/2">
      <div className="flex flex-col gap-y-3">
        <Label htmlFor="name">Album Name</Label>
        <Input id="name" type="text" placeholder="Bloom" />

        <Label htmlFor="artist">Album Artist</Label>
        <Input id="artist" type="text" placeholder="Troye Sivan" />

        <Label htmlFor="cover">Album Cover</Label>
        <Input id="cover" type="text" placeholder="url" />

        <Label htmlFor="rating">Album Rating</Label>
        <Slider id="rating" defaultValue={[1]} min={1} max={5} step={1} />
      </div>
    </form>
  );
};

export default page;
