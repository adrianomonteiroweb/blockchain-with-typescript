import * as crypto from "crypto";

class Transaction {
  constructor(
    public amount: number,
    public payer: string,
    public payee: string
  ) {}

  toString() {
    return JSON.stringify(this);
  }
}

class Block {
  public numOnlyUsedOnce = Math.round(Math.random() * 999999999)
  
  constructor(
    public prevHash: string,
    public transaction: Transaction,
    public ts: Date.now(),
  ) {}

  get hash() {
    const str = JSON.stringify(this);
    const hash = crypto.createHash('SHA256');

    hash.update(str).end();

    return hash.digest('hex');
  }
}
