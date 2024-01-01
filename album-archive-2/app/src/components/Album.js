import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Album = ({ album }) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <img
            src={
              'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F1d%2Fe2%2F1e%2F1de21ee6bfb84ec995aa09c6ff3762e4.png&f=1&nofb=1&ipt=2a8c85328784ff78912d0af03b488cfa0fa2092f6e82ea5ac2e89bbabff9696f&ipo=images'
            }
            alt={'blue neighbourhood'}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-xl">Blue Neighbourhood</CardTitle>
          <CardDescription>Troye Sivan | ⭐⭐⭐⭐⭐</CardDescription>
        </CardContent>
      </Card>
    </div>
  );
};

export default Album;
