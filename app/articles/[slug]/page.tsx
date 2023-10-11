"use client"
import { useParams } from "next/navigation";
import ArticleDetail from "./ArticleDetail";

export default function Detail() {
  const {slug} = useParams();
 
  return (
      <ArticleDetail slug={slug}/>
  );
}
