import Image from 'next/image';
import React from 'react';

export function PhotoRogerio() {
  const MyComponent = () => (
    <Image
      src='/images/rogeiro-vistoerror.png'
      height={600}
      width={600}
      alt='ErroRogerio'
    />
  );

  return (
    <div>
      <MyComponent></MyComponent>
    </div>
  );
}
