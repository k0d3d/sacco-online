export default interface ITransaction {
  transactionType: string;
  transactionAmount: number;
  transactionStatus: boolean;
  created: string;
  author: string;
}