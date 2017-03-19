@requests.each do |request|
  json.set! request.id do
    json.extract! request, :user_id, :host_id, :start_date, :end_date, :status
  end
end
