import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'


function TabelaRanking(props){
    return(
        <TableContainer>
                    <Table variant='unstyled' size='lg'>
                        <Thead>
                        <Tr>
                            <Th color='white' fontSize='15px'>NAME</Th>
                            <Th color='white' fontSize='15px' isNumeric>ID</Th>
                            <Th color='white' fontSize='15px' isNumeric>AMOUNT</Th>
                            <Th color='white' fontSize='15px' isDate>DATE</Th>
                        </Tr>
                        </Thead>
                        <Tbody>
                        <Tr>
                            <Td>{props.Name}</Td>
                            <Td isNumeric>{props.Id}</Td>
                            <Td isNumeric>{props.Amount}</Td>
                            <Td isDate>{props.Date}</Td>
                        </Tr>
                        <Tr>
                            <Td>{props.Name2}</Td>
                            <Td isNumeric>{props.Id2}</Td>
                            <Td isNumeric>{props.Amount2}</Td>
                            <Td isDate>{props.Date2}</Td>
                        </Tr>
                        <Tr>
                            <Td>{props.Name3}</Td>
                            <Td isNumeric>{props.Id3}</Td>
                            <Td isNumeric>{props.Amount3}</Td>
                            <Td isDate>{props.Date3}</Td>
                        </Tr>
                        </Tbody>
                    </Table>
                    </TableContainer>
    );
};

export default TabelaRanking;