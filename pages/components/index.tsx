import clsx from 'clsx';
import React from 'react';

import { Anchor, defaultTextColors, OL, Text, UL } from '../../src/components';
import { MainLayout } from '../../src/layouts';

const ComponentsPage: React.FC = () => {
  const createSectionHeader = (text: string) => {
    return <h1 className={clsx('text-lg my-5', defaultTextColors)}>{text}</h1>;
  };

  return (
    <MainLayout title="Components">
      <Text as="h4">Components</Text>

      {createSectionHeader('Links')}

      <Anchor href="/" block>
        Internal Anchor - will take you to home page
      </Anchor>

      <Anchor href="https://www.google.com/" external block>
        To Google
      </Anchor>

      <Anchor
        href="https://www.youtube.com/watch?v=yKNxeF4KMsY"
        external
        className="text-yellow-800 dark:text-yellow-200 hover:bg-yellow-400 hover:text-black"
        block
      >
        Yellow Anchor
      </Anchor>

      {createSectionHeader('Text')}

      <Text as="h1">Header 1</Text>

      <Text as="h2">Header 2</Text>

      <Text as="h3">Header 3</Text>

      <Text as="h4">Header 4</Text>

      <Text as="h5">Header 5</Text>

      <Text as="h6">Header 6</Text>

      <Text as="p">I am a paragraph but not in bold</Text>

      <Text as="p" bold>
        I am a bold paragraph
      </Text>

      <Text as="p" className="text-yellow-800 dark:text-yellow-200">
        I am a yellow paragraph
      </Text>

      <Text>
        Lorem, ipsum dolor.{' '}
        <Text
          as="span"
          className="inline-block text-yellow-800 dark:text-yellow-200"
        >
          And I am a yellow text inside a paragraph.
        </Text>{' '}
        Lorem ipsum dolor sit.
      </Text>

      <Text as="small">I am a small text</Text>

      <Text as="small" bold className="block">
        I am small yet bold
      </Text>

      {createSectionHeader('List')}

      <UL
        className="mb-5"
        items={[
          'UL Item A',
          'UL Item B',
          'UL Item C',
          'UL Item D',
          'UL Item E',
        ]}
      />

      <OL
        items={[
          'OL Item A',
          'OL Item B',
          'OL Item C',
          'OL Item D',
          'OL Item E',
        ]}
      />
    </MainLayout>
  );
};

export default ComponentsPage;
