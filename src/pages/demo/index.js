import React, { useState } from 'react'

import { Section, Table, Modal, Card, Button, Alert, AlertTitle, Pagination } from 'housing-core/components/index.js'

import { pageStyle, modalStyle, buttonStyle, cardStyle } from 'pages/demo/style.js'

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [page, setPage] = useState(2)

  return (
    <>
      <div css={pageStyle}>
        <Section heading='Welcome'>
          <Alert severity='info'>
            <AlertTitle>Hi there!</AlertTitle>
            This is a demo page, showcasing some of the more commonly used
            components.
          </Alert>
        </Section>

        <Section>
          <Alert severity='info'>
            We recommend that you keep this file intact in your codebase for
            future reference.
          </Alert>
        </Section>

        <Section title='List data'>
          <Table
            // // example usage of simpleHeader & simpleBody
            // simpleHeader={simpleHeader}
            // simpleBody={simpleBody}
            header={tableHeadings}
            body={tableRows}
          />
        </Section>

        <div />

        <Section title='Buttons and Modal'>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setIsModalOpen(true)}
          >
            Open modal
          </Button>

          <Modal
            style={modalStyle}
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          >
            <div>Buttons</div>

            <Button
              variant='contained'
              size='small'
              color='secondary'
              css={buttonStyle}
            >
              Small
            </Button>
            <Button variant='contained' color='secondary' css={buttonStyle}>
              Default
            </Button>
            <Button
              variant='contained'
              size='large'
              color='secondary'
              css={buttonStyle}
            >
              Large
            </Button>
          </Modal>
        </Section>

        <Section title='Cards'>
          <Card title='Pikachu' style={cardStyle}>
            Pikachu are a species of Pokémon, fictional creatures that appear in
            an assortment of video games, animated television shows and movies,
            trading card games, and comic books licensed by The Pokémon Company,
            a Japanese corporation.
          </Card>
        </Section>

        <Section title='Pagination'>
          <Pagination
            count={10}
            page={page}
            color='primary'
            onChange={(index, data) => setPage(data)}
          />
        </Section>
      </div>
    </>
  )
}

const tableHeadings = [
  {
    text: 'Name'
  },
  {
    text: 'Type'
  },
  {
    text: 'Moves'
  },
  {
    text: 'Abilities'
  },
  {
    text: 'HP',
    align: 'center'
  },
  {
    text: 'Attack',
    align: 'center'
  },
  {
    text: 'Speed',
    align: 'center'
  }
]

const tableRows = [
  {
    rows: [
      {
        text: 'Pikachu'
      },
      {
        text: 'Electric'
      },
      {
        text: 'Thundershock, Thunder wave'
      },
      {
        text: 'Static, Lightningrod'
      },
      {
        text: 35,
        align: 'center'
      },
      {
        text: 55,
        align: 'center'
      },
      {
        text: 90,
        align: 'center'
      }
    ]
  },
  {
    rows: [
      {
        content: () => (
          <a
            href=''
            onClick={() => window.open('https://pokedex.org/#/pokemon/1')}
          >
          Bulbasaur
          </a>
        )
      },
      {
        content: () => <u>Grass</u>
      },
      {
        text: 'Bullet seed, Solarbeam'
      },
      {
        text: 'Chlorophyll, Overgrow'
      },
      {
        text: 45,
        align: 'center'
      },
      {
        text: 49,
        align: 'center'
      },
      {
        text: 45,
        align: 'center'
      }
    ]
  }
]

/*
const simpleHeader = [
  'heading 1',
  'heading 2',
  'heading 3',
  'heading 4',
  'heading 5',
  'heading 6',
  'heading 7'
]
const simpleBody = [
  ['data 1a', 'data 1b', 'data 1c', 'data 1d', 'data 1e', 'data 1f', 'data 1g'],
  ['data 2a', 'data 2b', 'data 2c', 'data 2d', 'data 2e', 'data 2f', 'data 2g'],
  ['data 3a', 'data 3b', 'data 3c', 'data 3d', 'data 3e', 'data 3f', 'data 3g'],
  ['data 4a', 'data 4b', 'data 4c', 'data 4d', 'data 4e', 'data 4f', 'data 4g']
]
*/

export default Dashboard
