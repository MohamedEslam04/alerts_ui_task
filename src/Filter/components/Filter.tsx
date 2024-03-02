import React from 'react'
import '../styles/Filter.css'
import { Stock_ } from '../data/FilterData'
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import { Autocomplete, Chip, Stack, TextField } from '@mui/material';

const Filter = (): JSX.Element => {
    const categories = [...new Set(Stock_.map(stock => stock.category))]; // Extract unique categories

    return (
        <div className='filter-Box'>
            <h1 className='head'>Filter</h1>
            <Stack spacing={3} sx={{ width: '100 %' }}>
                <Autocomplete
                    multiple
                    id="tags-filled"
                    options={Stock_.map((option) => option.title)}
                    defaultValue={[Stock_[0].title]}
                    freeSolo
                    renderTags={(value: readonly string[], getTagProps) =>
                        value.map((option: string, index: number) => (
                            <Chip
                                variant="outlined"
                                label={option}
                                style={{ margin: 2, color: 'white', backgroundColor: '#53ACFF', height: '70%' }}
                                {...getTagProps({ index })}
                            />
                        ))
                    }

                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="filled"
                            label="filter"
                            placeholder="Favorites"
                            className='renderInput'
                        />
                    )}
                />
            </Stack>
            <div className='filter-item'>
                {categories.map(category => (
                    <div key={category}>
                        <h2>{category}</h2>
                        <Container className='card-container' key={category}>
                            <ul>
                                {Stock_.filter(stock => stock.category === category).map(filteredStock => (
                                    <li>
                                        <Card className='card' key={filteredStock.id}>
                                            <Card.Body>{filteredStock.title}</Card.Body>
                                        </Card>
                                    </li>
                                ))}
                            </ul>
                        </Container>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Filter