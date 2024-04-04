import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryListView from "../features/country/CountryListView";

jest.mock('react-query'); // Mock React Query

// Test data for countries
const mockCountries = [
  {
    name: 'Nigeria',
    flags: { png: 'https://example.com/nigeria.png' },
    capital: 'Abuja',
    // ... other country data
  },
  // ... more countries
];
jest.mock('./useWestAfricanCountries'); // Mock the hook

const useWestAfricanCountriesMock = jest.fn().mockReturnValue({
  isLoading: false, // Adjust loading state as needed
  error: null,
  data: mockCountries,
});

describe('CountryList component', () => {
  // Test loading state
  test('renders loading state when data is fetching', async () => {
    useWestAfricanCountriesMock.mockReturnValue({ isLoading: true, error: null, data: undefined });
    render(<CountryListView  countries={[]}/>);
    expect(await screen.findByText(/Loading countries.../i)).toBeInTheDocument();
  });

  // Test error state
  test('renders error message when data fetching fails', async () => {
    const mockError = new Error('Failed to fetch countries');
    useWestAfricanCountriesMock.mockReturnValue({ isLoading: false, error: mockError, data: undefined });
    render(<CountryListView countries={[]} />);
    expect(await screen.findByText(mockError.message)).toBeInTheDocument();
  });

  // Test successful data rendering
  test('renders list of countries with flags and details button', async () => {
    useWestAfricanCountriesMock.mockReturnValue({ isLoading: false, error: null, data: mockCountries });
    render(<CountryListView countries={[]} />);

    // Check for country list items
    const countryListItems = screen.getAllByRole('listitem');
    expect(countryListItems.length).toBe(mockCountries.length);

    // Check for flag images
    const flagImages = screen.getAllByRole('img', { name: /flag/i });
    expect(flagImages.length).toBe(mockCountries.length);

    // Check for details buttons
    const detailsButtons = screen.getAllByRole('button', { name: /details/i });
    expect(detailsButtons.length).toBe(mockCountries.length);
  });

  // Test country name rendering (add similar tests for other data)
  test('renders country name for each list item', async () => {
    useWestAfricanCountriesMock.mockReturnValue({ isLoading: false, error: null, data: mockCountries });
    render(<CountryListView countries={[]} />);

    const countryNames = screen.getAllByText((text) => text.startsWith(mockCountries[0].name));
    expect(countryNames.length).toBe(1);
  });
});
