@requests.each do |request|
  json.set! request.id do
    json.extract! request, :user_id, :start_date, :end_date, :status
    json.host request.host.name
  end
end
