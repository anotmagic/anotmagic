import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
if (!uri) throw new Error("MONGODB_URI is not set in .env.local");

// Cache the connection across hot reloads / serverless invocations
const g = globalThis as unknown as {
  _mongoose?: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
};
const cached = (g._mongoose ??= { conn: null, promise: null });

export async function connectDB() {
  if (cached.conn) return cached.conn;
  cached.promise ??= mongoose.connect(uri!, { bufferCommands: false });
  cached.conn = await cached.promise;
  return cached.conn;
}
