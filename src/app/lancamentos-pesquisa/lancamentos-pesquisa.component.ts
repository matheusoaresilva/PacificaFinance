import { Component } from '@angular/core';

import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css'],
})
export class LancamentosPesquisaComponent {
  faPencil = faPencil;
  faTrash = faTrash;
  lancamentos = [
    {
      tipo: 'DESPESA',
      descricao: 'Compras',
      dataVencimento: '30/06/2017',
      dataPagamento: '31/06/2017',
      valor: 4.55,
      pessoa: 'Padaria',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Carro',
      dataVencimento: '15/06/2017',
      dataPagamento: '18/06/2017',
      valor: 400.0,
      pessoa: 'Consessionaria',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Mensalidade da academia',
      dataVencimento: '10/06/2017',
      dataPagamento: null,
      valor: 90.9,
      pessoa: 'Academia',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Aluguel',
      dataVencimento: '07/06/2017',
      dataPagamento: null,
      valor: 900.5,
      pessoa: 'Corretora',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Imposto',
      dataVencimento: '20/06/2017',
      dataPagamento: '23/06/2017',
      valor: 325.5,
      pessoa: 'Ministério da Fazenda',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Aluguel',
      dataVencimento: '30/04/2022',
      dataPagamento: '02/05/2022',
      valor: 1500.0,
      pessoa: 'Imobiliária ABC',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Conta de Luz',
      dataVencimento: '10/05/2022',
      dataPagamento: '15/05/2022',
      valor: 120.5,
      pessoa: 'Companhia de Eletricidade XYZ',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Materiais de Escritório',
      dataVencimento: '15/05/2022',
      dataPagamento: '17/05/2022',
      valor: 250.0,
      pessoa: 'Papelaria Ponto Final',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Manutenção de Computadores',
      dataVencimento: '30/05/2022',
      dataPagamento: '02/06/2022',
      valor: 800.0,
      pessoa: 'Empresa de Informática Delta',
    },
    {
      tipo: 'DESPESA',
      descricao: 'Alimentação',
      dataVencimento: '25/05/2022',
      dataPagamento: '28/05/2022',
      valor: 120.75,
      pessoa: 'Restaurante Sabor Caseiro',
    },
    {
      tipo: 'RECEITA',
      descricao: 'Venda de produtos',
      dataVencimento: '20/05/2022',
      valor: 1500.0,
      pessoa: 'Cliente XYZ',
    },
    {
      tipo: 'RECEITA',
      descricao: 'Consultoria em Marketing',
      dataVencimento: '15/04/2022',
      valor: 2500.0,
      pessoa: 'Empresa ABC',
    },
    {
      tipo: 'TRANSFERÊNCIA',
      descricao: 'Transferência para Poupança',
      dataVencimento: '01/05/2022',
      valor: 5000.0,
      pessoa: 'Banco',
    },
    {
      tipo: 'TRANSFERÊNCIA',
      descricao: 'Transferência de Salário',
      dataVencimento: '30/04/2022',
      valor: 3500.0,
      pessoa: 'Empresa XYZ',
    },
    {
      tipo: 'INVESTIMENTO',
      descricao: 'Compra de Ações',
      dataVencimento: '10/05/2022',
      valor: 2000.0,
      pessoa: 'Corretora ',
    },
  ];
}
