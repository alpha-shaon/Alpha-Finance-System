export default function VoucherUpload({ setVoucher }) {
  return (
    <div className="my-4">
      <label>Upload Voucher:</label>
      <input type="file" onChange={(e) => setVoucher(e.target.files[0])} />
    </div>
  );
}
