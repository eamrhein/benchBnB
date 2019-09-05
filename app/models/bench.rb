class Bench < ApplicationRecord
  def self.in_bounds(bounds)
    inbound_benches = {}
    benches = Bench.all
    benches.each do |bench|
      if bounds["northEast"]["lat"].to_f  > bench.lat && bounds["southWest"]["lat"].to_f < bench.lat
        if bounds["northEast"]["lng"].to_f > bench.lng && bounds["southWest"]["lng"].to_f > bench.lng
          inbound_benches[bench.id] = bench
        end
      end
    end
    inbound_benches
  end
end