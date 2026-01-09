export default function (buckets: { _id: string }[]):string[] {
  const set = new Set<string>();

  for (const bucket of buckets) {
    set.add(bucket._id.toLowerCase().trim());
  }

  return Array.from(set);
}