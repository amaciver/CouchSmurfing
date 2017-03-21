@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :user, :host_id, :body
  end
end
