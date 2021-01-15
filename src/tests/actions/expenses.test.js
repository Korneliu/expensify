import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({ // we use toEqual with obj and arrays
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should setup edit expence action object', () => {
  const action = editExpense('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  })
})

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    note: 'testing note',
    amount: '1095',
    createdAt: '1000'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should setup add expenese action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})
