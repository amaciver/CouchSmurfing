@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :user_id, :host_id, :body
  end
end
