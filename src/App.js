import { Container, Content, Row } from './styles';
import Input from './components/Input/';
import Button from './components/Button';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');


  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  };

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0');
    setOperation('');
  };

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation('');
    }
  }

  const handleSubNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setOperation('');
    }
  }

  const handleDivNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
      setOperation('');
    }
  }

  const handleMultNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
    } else {
      const multiplication = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiplication));
      setOperation('');
    }
  }

  const handleModNumbers = () => {
    if (firstNumber === '0'){
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('%');
    } else {
      const module = Number(firstNumber) % Number(currentNumber);
      setCurrentNumber(String(module));
      setOperation('');
    }
  }

  const handlePowNumbers = () => {
    if (firstNumber !== '0') {
      setFirstNumber(String(currentNumber));
      const pow = Number(currentNumber)*Number(currentNumber);
      setCurrentNumber(String(pow));
    }
  }
  
  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleSubNumbers();
          break;
        case '/':
          handleDivNumbers();
          break;
        case 'x':
          handleMultNumbers();
          break;
        case '%':
          handleModNumbers();
          break;
        case '²':
          handlePowNumbers();
          break;
        default:

          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label='C' onClick={handleOnClear} />
          <Button label='²' onClick={handlePowNumbers} />
          <Button label='/' onClick={handleDivNumbers} />
          <Button label='x' onClick={handleMultNumbers} />
        </Row>
        <Row>
          <Button label='7' onClick={() => handleAddNumber('7')} />
          <Button label='8' onClick={() => handleAddNumber('8')} />
          <Button label='9' onClick={() => handleAddNumber('9')} />
          <Button label='-' onClick={handleSubNumbers} />
        </Row>
        <Row>
          <Button label='4' onClick={() => handleAddNumber('4')} />
          <Button label='5' onClick={() => handleAddNumber('5')} />
          <Button label='6' onClick={() => handleAddNumber('6')} />
          <Button label='+' onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label='1' onClick={() => handleAddNumber('1')} />
          <Button label='2' onClick={() => handleAddNumber('2')} />
          <Button label='3' onClick={() => handleAddNumber('3')} />
          <Button label='.' onClick={() => handleAddNumber('.')} />
        </Row>
        <Row>
          <Button label='0' onClick={() => handleAddNumber('0')} />
          <Button label='%' onClick={handleModNumbers} />
          <Button label='=' onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
